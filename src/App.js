import Directory from "./component/Directory/Directory.component.jsx"
import categories from "./component/category-item/cateogries";


const App = () => {
  return (
    <Directory
      categories={categories}
    />
  )

}

export default App;
