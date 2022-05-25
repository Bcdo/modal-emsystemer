# A lightweight modal for EM

The modal and its content is created as a web component. The content is not dynamic, and changes to it will have to be made inside the javascript file.

There is currently no logic to determine who will get the pop-up, and it will open whenever the page has loaded.

Use as is, or modify as you see fit.

### Usage

Import the modal.js in the HTML where it is wanted

```html
<script src="modal.js"></script>
```

Use the custom HTML element to create the modal. It should work wherever in the document it is loaded, but it is recommended to load it early in case of lazyloading opt. As the modal has been created static, there is no slots provided.

```html
<kp-modal> </kp-modal>
```

And that should be it! The modal will be created and the content will be loaded. The visitor can close the modal by clicking anywhere but the "jeg vil vite mer"-button.

### Considerations

The image that is loaded in the modal has the same path as the modal file, and should be adjusted accordingly if the image is loaded from a seperate folder.

The index.html file can be deleted as it is used for testing.
