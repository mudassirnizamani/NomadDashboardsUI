// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'development',
  APIBaseUrl: 'https://localhost:5001/api',
  AccountsUrls: {
    Signup: '/Accounts/Signup',
    Signin: '/Accounts/Signin',
    EmployerSignup: '/Accounts/Employer/Signup',
    EmployeeSignup: '/Accounts/Employee/Signup'
  },
  UserUrls: {
    UserProfile: '/Users',
    GetAllUsers: '/Users/GetAllUsers',
    GetUserRoles: '/Accounts/GetUserRole/',
    GetUserByUserName: '/Users/GetUserByUserName/',
    AdminUpdateUsers: '/Users/AdminUpdateUser'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
