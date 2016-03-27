export var styles = `
.videoplayer {
  width: 1000px;
  height: 350px;
  margin: auto;
}

.videoplayer__player {
  float: left;
  width: 650px;
  background-color: #222222;
}

.videoplayer__playlist {
  float: left;
  width: 346px;
  background-color: #222222;
}

.videoplayer__playlist__list {
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  height: 350px;
  background-color: #222222;
  color: #dddddd;
}

.videoplayer__playlist__list__item {
  padding: 5px 10px;
}

.videoplayer__playlist__list__item:hover {
  background-color: #505050;
}

.videoplayer__playlist__list__item-selected {
  background-color: #3a3a3a;
}
`;