# router6-essentials

### Upgrading from router5

1. Change all ```<Switch>``` elements to ```<Routes>```

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
2. Update all ```component``` props in ```<Route>``` to ```element```
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
3. Remove ```exact``` prop from all ```<Route>``` elements

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

4. Replace all ```<Redirect>``` with ```<Navigate>```

```javascript
// from
<Redirect to="/somewhere/else" />

// to
<Navigate to="/somewhere/else" />
```
5. Use ```<Outlet>``` for nested routes (Dare to touch me before you touch my children approach)
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

 
