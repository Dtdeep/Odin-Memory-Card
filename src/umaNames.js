const baseUrl = "https://umapyoi.net/api/v1";

// maybe put this into a json and then separate them into "generation" field for future references

const getAllUmaId = async () => {
  const umas = await fetch(`${baseUrl}/character/info`);
  const umaJson = await umas.json();
  return umaJson;
};

const getTwelveUmas = async () => {
  const allUmasId = await getAllUmaId();
  const selectedUmaIds = [];
  while (selectedUmaIds.length <= 11) {
    const index = Math.floor(Math.random() * allUmasId.length);
    if (
      selectedUmaIds.some((uma) => uma.game_id === allUmasId[index].game_id)
    ) {
      continue;
    }
    selectedUmaIds.push({
      game_id: allUmasId[index].game_id,
      name_en: allUmasId[index].name_en,
      thumb_img: allUmasId[index].thumb_img,
    });
  }

  return selectedUmaIds;
};

// const getAllCharacterInfo = async () => {};
// // const fetchTwelveObjects = (twelveNames) => {};
// // fetchTwelveObjects(getTwelveNames());
export default getTwelveUmas;
