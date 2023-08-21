fetch(
  "https://drive.google.com/file/d/1K1hjSAafROnWt3F1QhZC31E_DUrzub5Q/view?usp=share_link"
)
  .then((response) => response.json())
  .then((data) => {
    // Use the JSON data in your app
    console.log(data); // Replace with your actual data handling logic
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
