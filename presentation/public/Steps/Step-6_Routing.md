## Step 6: Routing

### Routing has 3 main parts:

1. Route view: The place(holder) where to show routing result(s)
```html
  <div id="app">
    <router-view name="top"></router-view>
    <router-view></router-view>
  </div>
```

2. Route linking: Call the Page via URL
```html
    <router-link :to="{ path: '/agenda'}" class="menu-btn">Agenda</router-link>
    <router-link :to="{ path: '/appointments'}" class="menu-btn">Appointments</router-link>
```

3. Route configuration: Mapping URL's to Component(s)
```javascript
export default [
  { path: '/', components: { top: Menu, default: Agenda }},

  { path: '/agenda', components: { top: Menu, default: Agenda }},
  { path: '/agenda/:seldate', components: { top: Menu, default: Agenda }},

  { path: '/appointments', components: { top: Menu, default: AppointmentsOverview }},
];
```

<i class="far fa-hand-point-down fa-2x"></i>

## Todo(s)
1. Add above routing to your Components...
2. Use URL to change current Month and optional selected date...

