
import "./ExploreMenu.css";
import { menu_list } from "../../data/menu_list";

export default function ExploreMenu(category,setCategory) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p>Select from a wide range of delicious categories</p>

      <div className="menu-list">
        {menu_list.map((item) => (
          <div onClick={()=>setCategory(prev=>prev===item.name?"All":item.name)} key={item.id} className="menu-item">
            <img className={category===item.name?"active":""} src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <span>{item.category}</span>
          </div>
        ))}
      </div>
      <hr/>
    </div>
  );
}
