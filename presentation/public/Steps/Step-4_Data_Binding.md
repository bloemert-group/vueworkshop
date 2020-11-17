## Step 4: Data Binding

In the previous step we added some state (data) to our components. In this section we will go a little further with data-binding.

In a Vue.js, data is initialized using a function, e.g.:

```javascript
data: function() {
	return {
		selectedDate: null
	};
}
```

The reason a function is used to initialize the data, is to ensure that every instance of a component gets it's own state, and does not share it's data with other components, which could cause unwanted and unpredictable side effects.

## Binding input controls to component data

Vue offers One- and Two-way binding between the input controls (HTML DOM) and the Component's data.

### One way bindings
Explained by beneath info from: https://vuejs.org/v2/guide/syntax.html#Shorthands

Binding using v-bind: Data flows from Component ==> HTML DOM
```html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a :[key]="url"> ... </a>
```

Events using v-on: Data flows from HTML DOM ==> Component optionally using $event object containing HTML Control Event data.
```html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

### Two way binding
In Vue.js, it is usually not neccesary to create event handlers and do manual updates for input fields. Vue.js has the _v-model_ attribute for that:

```html
<input v-model="message" placeholder="edit me" />
<p>Message is: {{ message }}</p>
```

Above v-model usage is essentially the same as:
```html
<input 	v-bind:value="message"
   		v-on:input="message = $event.target.value">
```
or (shorthand syntax):
```html
<input :value="message"
   		@input="message = $event.target.value">
```

NOTE: For simple apps the Two way binding is a quick win! But when developing bigger apps that e.g. use State Management like Vuex (See step 5) Two way binding becomes hard to manage and One way binding is preferred.


<i class="far fa-hand-point-down fa-2x"></i>

## Todo(s)

### 1. Show appointments when selecting date

- Use the `getAppointments` function in helpers.js to initialise the appointment data in the _Appointments_ component.

- Show the appointments for the selected date

- Important appointments are highlighted in red

### 2. Make the description and importance of appointments editable

- You might not want to make the time editable just yet.
