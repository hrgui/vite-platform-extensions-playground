# Vite Example with different platforms

Do the following

1. `npm install`
2. `PLATFORM=ps5 npm run dev`

Now the app will only prioritize imports that are for ps5, and fallback to the default variant if it is not available.

Change it for ps4:

```
PLATFORM=ps4 npm run dev
```

Now the app will prioritize imports that are for ps4, and fallback to the default variant if it is not available.

# Why do this?

This allows ways to have 1 app, or a package that can be tailored for different devices, without needing to have a package per each device type. That doesn't scale.
