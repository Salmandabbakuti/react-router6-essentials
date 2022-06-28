# router6-essentials

### Upgrading from router5

```javascript
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Navigate,
  Outlet
} from "react-router-dom"; // import all new components from upgraded package(v6.0.0+)
```

1. Change all `<Switch>` elements to `<Routes>`

```javascript

// from
<Switch>
  <Route path="/" component={Home} />
  <Route path="/dashboard" component={Dashboard} />
</Switch>

// to

<Routes>
  <Route path="/" component={Home} />
  <Route path="/dashboard" component={Dashboard} />
</Routes>
```

2. Update all `component` props in `<Route>` to `element`

```javascript
// from
<Routes>
  <Route path="/dashboard" component={Dashboard} />
</Routes>

// to
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
```

3. Remove `exact` prop from all `<Route>` elements

```javascript
// from
<Routes>
  <Route exact path="/dashboard" component={Dashboard}/>
</Routes>

// to
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>
```

4. Replace all `<Redirect>` with `<Navigate>`

```javascript
// from
<Redirect to="/somewhere/else" />

// to
<Navigate to="/somewhere/else" />
```

5. Use `<Outlet>` for nested routes (Dare to touch me before you touch my children approach)

```javascript
// from
<Route>
  <Switch>
    <PrivateRoute path="/" component={Home}/>
    <PrivateRoute path="/dashboard" component={Dashboard}/>
  </Switch>
</Route>

// to
<Route element={isAuth ? <Outlet /> : <Navigate to="/login" />}>
   <Route path="/" element={<Dashboard />} />
   <Route path="/companies" element={<Companies />} />
</Route>
```

6. Use `UseNavigate` instead of `props.history`

```javascript
// from
function handleClick() {
  history.push("/home");
}

// to
const naviagate = useNaviagte();

function handleClick() {
  navigate("/home");
}
```

7. Protected Routes(Auth Based)

```javascript
// from
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

// to

// Routes file
<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>;

// if user is logged in, render the route's component. else redirect to login page
const PrivateRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/login" />;
```
