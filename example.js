const fbdown = require('./index.js');

// const link = "https://m.facebook.com/story.php?story_fbid=pfbid02tLvj3Z7nepbxPWETCoZuigV3pVCSQWbxUUMMsJ3AwLQvnJ6MwnyGh2XVuECone25l&id=100082950226013&mibextid=Nif5oz";
const link = "https://www.facebook.com/groups/981194766091220/permalink/1282624289281598/?app=fbl";

fbdown(link)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });