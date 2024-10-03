const { default: SummaryApi } = require("../common");

const fetchCategoryWiseProduct = async (category) => {
  try {
    const response = await fetch(SummaryApi.categoryWiseProduct.url, {
      method: SummaryApi.categoryWiseProduct.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const dataResponse = await response.json();

    // Ensure that dataResponse is valid before accessing its properties
    if (!dataResponse || typeof dataResponse !== 'object') {
      throw new Error("Invalid data format received");
    }

    return dataResponse;
  } catch (error) {
    console.error('Fetch error:', error.message);
    return null; // You might want to return a default value or handle it appropriately
  }
};

export default fetchCategoryWiseProduct;
