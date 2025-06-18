import Button from "@mui/material/Button";
import { IoMdAdd } from "react-icons/io";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useContext, useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { fetchDataFromApi } from "../../../../my-project/src/utils/api";
import { deleteMultipleData } from "../../utils/api";
import Badge from "../../Components/Badge";
import CircularProgress from "@mui/material/CircularProgress";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "userImg", label: "USER IMAGE", minWidth: 80 },
  { id: "userName", label: "USER NAME", minWidth: 100 },
  { id: "userEmail", label: "USER EMAIL", minWidth: 150 },
  { id: "userPh", label: "USER PHONE NO", minWidth: 130 },
  { id: "verifyEmail", label: "EMAIL VERIFY", minWidth: 130 },
  { id: "createdDate", label: "CREATED", minWidth: 130 },
];

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [userData, setUserData] = useState([]);
  const [userTotalData, setUserTotalData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedIds, setSortedIds] = useState([]);

  const context = useContext(MyContext);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setIsLoading(true);
    fetchDataFromApi(`/api/user/getAllUsers`).then((res) => {
      setUserData(res?.users);
      setUserTotalData(res?.users);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (searchQuery !== "") {
      const filteredItems = userTotalData?.filter(
        (user) =>
          user._id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user?.createdAt?.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setUserData(filteredItems);
    } else {
      fetchDataFromApi(`/api/user/getAllUsers`).then((res) => {
        if (res?.error === false) {
          setUserData(res?.users);
          setIsLoading(false);
        }
      });
    }
  }, [searchQuery]);

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;

    const updatedItems = userData.map((item) => ({
      ...item,
      checked: isChecked,
    }));
    setUserData(updatedItems);

    if (isChecked) {
      const ids = updatedItems.map((item) => item._id).sort((a, b) => a - b);
      setSortedIds(ids);
    } else {
      setSortedIds([]);
    }
  };

  const handleCheckboxChange = (e, id, index) => {
    const updatedItems = userData.map((item) =>
      item._id === id ? { ...item, checked: !item.checked } : item
    );
    setUserData(updatedItems);

    const selectedIds = updatedItems
      .filter((item) => item.checked)
      .map((item) => item._id)
      .sort((a, b) => a - b);
    setSortedIds(selectedIds);
  };

  const deleteMultiple = () => {
    if (sortedIds.length === 0) {
      context.alertBox("error", "Please select items to delete.");
      return;
    }

    try {
      deleteMultipleData(`/api/user/deleteMultiple`, {
        data: { ids: sortedIds },
      }).then((res) => {
        getUsers();
        context.alertBox("success", "User deleted");
        setSortedIds([]);
      });
    } catch (error) {
      context.alertBox("error", "Error deleting items.");
    }
  };

  return (
    <>
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full px-5 justify-between">
          <div className="col w-[20%]">
            <h2 className="text-[18px] font-[600]">Users List</h2>
          </div>

          <div className="col w-[40%] ml-auto flex items-center gap-3">
            {sortedIds?.length !== 0 && (
              <Button
                variant="contained"
                className="btn-sm"
                size="small"
                color="error"
                onClick={deleteMultiple}
              >
                Delete
              </Button>
            )}
            <SearchBox
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>

        <br />
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    {...label}
                    size="small"
                    onChange={handleSelectAll}
                    checked={
                      userData?.length > 0
                        ? userData.every((item) => item.checked)
                        : false
                    }
                  />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <span className="whitespace-nowrap">{column.label}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading === false ? (
                userData?.length !== 0 &&
                userData
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.reverse()
                  ?.map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell style={{ minWidth: columns.minWidth }}>
                          <Checkbox
                            {...label}
                            size="small"
                            checked={user.checked === true ? true : false}
                            onChange={(e) =>
                              handleCheckboxChange(e, user._id, index)
                            }
                          />
                        </TableCell>
                        <TableCell style={{ minWidth: columns.minWidth }}>
                          <div className="flex items-center gap-4 w-[70px]">
                            <div className="img w-[45px] h-[45px] rounded-md overflow-hidden group">
                              <Link to="/product/12345" data-discover="true">
                                <img
                                  src={
                                    user?.avatar !== "" &&
                                    user?.avatar !== undefined
                                      ? user?.avatar
                                      : "/user.jpg"
                                  }
                                  className="w-full group-hover:scale-105 transition-all"
                                />
                              </Link>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell style={{ minWidth: columns.minWidth }}>
                          {user?.name}
                        </TableCell>

                        <TableCell style={{ minWidth: columns.minWidth }}>
                          <span className="flex items-center gap-2">
                            <MdOutlineMarkEmailRead /> {user?.email}
                          </span>
                        </TableCell>

                        <TableCell style={{ minWidth: columns.minWidth }}>
                          <span className="flex items-center gap-2">
                            <MdLocalPhone />
                            {user?.mobile === null ? "NONE" : user?.mobile}
                          </span>
                        </TableCell>

                        <TableCell style={{ minWidth: columns.minWidth }}>
                          {user?.verify_email === false ? (
                            <span
                              className={`inline-block py-1 px-4 rounded-full text-[11px] capitalize bg-red-500 text-white font-[500]`}
                            >
                              Not Verify
                            </span>
                          ) : (
                            <span
                              className={`inline-block py-1 px-4 rounded-full text-[11px] capitalize bg-green-500 text-white font-[500]`}
                            >
                              Verified
                            </span>
                          )}
                        </TableCell>

                        <TableCell style={{ minWidth: columns.minWidth }}>
                          <span className="flex items-center gap-2">
                            <SlCalender /> {user?.createdAt?.split("T")[0]}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell colSpan={8}>
                    <div className="flex items-center justify-center w-full min-h-[148px]">
                      <CircularProgress color="inherit" />
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default Users;
