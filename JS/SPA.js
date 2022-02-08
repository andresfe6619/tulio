const app = new ProductoController(new ProductoModel(), new productoView())



const routes = [


{path: 'products', component: Product}
{path: 'products/:id', component: Product}
{path: 'products/:id'}

]

const ErrorComponent = (padre) =>;


const parseLocation = () => location.hash.slice(1).toLocaleLowerCase()|| "/";

const findActionByPath (path, routes) => routes.find