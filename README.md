# Responsive Framework
When trying to figure out a reusable solution for creating responsive ads, I wrote a responsive framework that utilizes basic javascript driven by an array of user determined breakpoints to return which breakpoint is being displayed. This is then translated into a size class that is applied to the ad's container div. Then any ad element can have different styles based on that size class. This approach allows for easy organization and application of responsive changes and also works on some legacy browsers that media queries don't.

[Click here](http://www.joebrust.com/projects/responsive-framework) to view a live demo.

### Usage
First you must define the break points in which you wish to dictate the sizes by.
```
var myBreakPoints = [468, 728];
```

As the break points are reached, the api is going to call a predefined callback. Include that callback function and insert your container id. Here is where you can also do other actions based on a new break point being reached.
```
function respAdSizeChangeHandler(size){
    document.getElementById('container').className = size;
}
```

Then initialize the api by sending your breakpoints to the init function.
```
respAd.init(myBreakPoints);
```