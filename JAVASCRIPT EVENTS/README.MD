In layman's terms:

Debouncing will prevent a function from running while it is still being called frequently. A debounced function will only run after it has been determined that it is no longer being called, at which point it will run exactly once. Practical examples of debouncing:

Auto-saving or validating the contents of a text-field if the user "stopped typing": the operation will only be done once, AFTER it has been determined that the user is no longer typing (no longer pressing keys).

Logging where users rest their mouse: the user is no longer moving their mouse, so the (last) position can be logged.

Throttling will simply prevent a function from running if it has run recently, regardless of the call frequency. Practical examples of throttling:

Implementations of v-sync are based on throttling: the screen will only be drawn if 16ms elapsed since the last screen draw. No matter how many times the screen refresh functionality is called, it will only run at most once every 16ms.
