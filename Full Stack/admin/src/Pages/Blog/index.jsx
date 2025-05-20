import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { deleteData } from "../../utils/api";
import Button from "@mui/material/Button";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import SearchBox from "../../Components/SearchBox";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "image", label: "IMAGE", minWidth: 100 },
  { id: "title", label: "TITLE", minWidth: 200 },
  { id: "description", label: "DESCRIPTION", minWidth: 300 },
  { id: "action", label: "ACTION", minWidth: 100 },
];

const BlogList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [blogData, setBlogData] = useState([]);
  const [sortedIds, setSortedIds] = useState([]);

  const context = useContext(MyContext);

  useEffect(() => {}, [context?.isOpenFullScreenPanel]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const deleteSlide = (id) => {
    deleteData(`/api/blog/${id}`).then((res) => {
      context.alertBox("success", "Blog deleted");
    });
  };
  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">
          Blog List
          <span className="font-[400] text-[14px]"></span>
        </h2>

        <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Blog",
              })
            }
          >
            Add Blog
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {blogData?.length !== 0 &&
                blogData?.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell width={100}>
                        <div className="flex items-center gap-4 w-[200px]">
                          <div className="img w-full rounded-md overflow-hidden group">
                            <img
                              src={item?.images[0]}
                              className="w-full group-hover:scale-105 transition-all"
                            />
                          </div>
                        </div>
                      </TableCell>

                      <TableCell width={200}>
                        <span className="text-[15px] font-[500]">
                          {item?.title}
                        </span>
                      </TableCell>

                      <TableCell width={300}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item?.description?.substr(0, 150) + "...",
                          }}
                        />
                      </TableCell>

                      <TableCell width={100}>
                        <div className="flex items-center gap-1">
                          <Button
                            className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]"
                            onClick={() =>
                              context.setIsOpenFullScreenPanel({
                                open: true,
                                model: "Edit Blog",
                                id: item?._id,
                              })
                            }
                          >
                            <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                          </Button>

                          <Button
                            className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]"
                            onClick={() => deleteSlide(item?._id)}
                          >
                            <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default BlogList;
