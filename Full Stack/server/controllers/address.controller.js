export const deleteAddressController = async (request, response) => {
  try {
    const userId = request.userId;
    const _id = request.params.id;

    if (!_id) {
      return response.status(400).json({
        message: "Provide _id",
        error: true,
        success: false,
      });
    }

    const deleteItem = await AddressModel.deleteOne({
      _id: _id,
      userId: userId,
    });

    if (!deleteItem) {
      return response.status(404).json({
        message: "The address in the database is not found",
        error: true,
        success: false,
      });
    }

    return response.json({
      message: "Address remove",
      error: false,
      success: true,
      data: deleteItem,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
