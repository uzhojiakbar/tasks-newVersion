const changePage = (pageText) => {
  try {
    page = pageText;
    console.log(`Ushbu sahifaga otildi ${pageText}`);
  } catch (error) {
    console.error(`xatolik ${error}`);
  }
};
