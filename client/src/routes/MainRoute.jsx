import { Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "../GlobalStyle";

import Layout from "../layout&route/Layout";
import { MainLayout, PageWrapper } from "../components";
import routes from "./routes";

const MainRoute = () => {
  return (
<>


    <Routes>
      <Route path="/" element={<MainLayout/>}>
 
        {routes.map((route,index)=>(
          route.index ? (
            <Route index key={index} element={route.state  ? (<PageWrapper state={route.state}>{route.element}</PageWrapper>): route.element} />
          ): (
            <Route
            path={route.path}
            key={index}
            element={route.state ? (
              <PageWrapper state={route.state}>{route.element}</PageWrapper>
            ) : route.element}
          />
          )
        ))}

      </Route>
    </Routes>


</>
  );
};

export default MainRoute;



{/* <div className="routes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="stores" element={<Stores />} />
          <Route path="about" element={<About />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div> */}