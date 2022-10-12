import ShelfListItem from "./ShelfListItem";

export default function ShelvesTab(props) {
  return props.shelves.map((shelf) => <ShelfListItem shelf={shelf} key={shelf.id} />);
}
