import { ChangeEventHandler } from "react";
import "./searchbox.css";

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  searchMonsters?: string;
}

interface IChangeHandlerProps {
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  onChangeHandler,
  searchMonsters,
  className,
}: ISearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={searchMonsters}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
