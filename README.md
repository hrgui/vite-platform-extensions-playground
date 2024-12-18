# Vite Example with different platforms

Do the following

1. `npm install`
2. `PLATFORM=ps5 npm run dev`

Now the app will only import files that are just for ps5.

Change it for ps4:

```
PLATFORM=ps4 npm run dev
```

Now the app will only import files just for ps4.

# Why do this?

This allows ways to have 1 app, or a package that can be tailored for different devices.

The non-prefixed variant is the default variant, while the prefixed variant is the non-default variant.
