import React, {useState, useContext, createContext} from 'react';
// 練習拆分Components https://zh-hant.reactjs.org/docs/thinking-in-react.html

export const filterContext = createContext();

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

function ProductCategoryRow({category}) {
    return (
    <tr>
        <th colSpan="2">
        {category}
        </th>
    </tr>
    );
}

function ProductRow({product}) {
    const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
        {product.name}
    </span>;

    return (
    <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
    );
}
  
function ProductTable({products}) {
    const {filterText, inStockOnly} = useContext(filterContext)
    const rows = [];
    let lastCategory = null;
    
    products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
            return;
            }
            if (inStockOnly && !product.stocked) {
            return;
            }
            if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                category={product.category}
                key={product.category} />
            );
            }
            rows.push(
            <ProductRow
                product={product}
                key={product.name}
            />
            );
            lastCategory = product.category;
        });
    
    return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
    </table>
    );
}
  
function SearchBar() {
    const {filterText, setFilterText, inStockOnly, setIsStockOnly} = useContext(filterContext)
    return (
    <form>
        <input type="text" placeholder="Search..." value={filterText} onChange={event => {setFilterText(event.target.value)}} />
        <p>
        <input type="checkbox" checked={inStockOnly} onChange={() => {setIsStockOnly(prev => !prev)}} />
        {' '}
        Only show products in stock
        </p>
    </form>
    );
}
  
function FilterableProductTable() {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setIsStockOnly] = useState(false);
    return (
    <div>
        <filterContext.Provider value={{filterText, setFilterText, inStockOnly, setIsStockOnly}}>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </filterContext.Provider>
    </div>
    );
}
  
export default FilterableProductTable;
