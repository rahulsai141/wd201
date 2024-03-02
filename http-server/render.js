const time = async ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const fetchUserDetails = async userID => {
  console.log('Fetch User Details');
  await time(500);
  return `https://example/${userID}`;
};

const downloadImageData = async imageURL => {
  console.log('Downloading Image');
  await time(500);
  return `Image is Downlaoding`;
};

const render = async imageData => {
  await time(500);
  console.log('rendering');
};

// fetchUserDetails('john', imageURL => {
//   downloadImageData(imageURL, imageData => {
//     render(imageData);
//   });
// });

// fetchUserDetails('john')
//   .then(imageURL => downloadImageData(imageURL))
//   .then(imageData => render(imageData));

const run = async () => {
  const imageURL = await fetchUserDetails('john');
  const imageData = await downloadImageData(imageURL);
  await render(imageData);
};

run();
