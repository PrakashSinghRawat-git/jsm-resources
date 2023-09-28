import React from "react";

interface Props {
    query: string;
    category: string;
}
const Header = ({ query, category }: Props) => {
    if (query && category) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for &quot;{query}&quot; in
                <span className="capitalize">{category}</span>
            </h1>
        );
    }
    if (query) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for &quot;{query}&quot;
            </h1>
        );
    }
    if (category) {
        return (
            <h1 className="heading3 self-start text-white-800">
                Search Results for &quot;{category}&quot;
            </h1>
        );
    }
};

export default Header;
