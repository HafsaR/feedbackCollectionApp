/*{
    id: 1,
    title: 'Hi!',
    categories: 'Computer, Friends',
    content: 'Blog post content'
  }/*/

//   function fetchAlbum(){
//       fetch('https://rallycoding.herokuapp.com/api/music_albums')
//       .then(res => res.json())
//       .then(json => console.log(json));
//   }
//  fetchAlbum();

// async await syntax
const fetchAlbum = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
};
fetchAlbum();
