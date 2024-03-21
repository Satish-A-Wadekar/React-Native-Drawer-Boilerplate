/***
 * we are using npm package "react-native-vector-icons" for icons ("https://oblador.github.io/react-native-vector-icons/")
 * this npm package includes multiple other icon packages under one roof
 */

export const backButtonConfig = [
  {
    id: "commonBackButton",
    label: "Back",
    icon: {
      library: "Ionicons",
      name: "return-up-back",
      size: 30,
      color: "#FC2E02",
    },
  },
];

/* Drawer Menu object template will be as followed
  {
    id: 1,                    // unique Key to identify
    label: "",                // name you wish to display on menu inside drawer menu
    order: 1,
    screen: {
      component: "",          // component name you wish to load on screen
      header: "",             // screen header you wish to display
    },
    icon: {
      library: "",            // library name you wish to use for icon ("https://oblador.github.io/react-native-vector-icons/")
      name: "",               // icon name you wish to show
      size: 0,                // icon size
      color: "",              // icon color
    },
    children: [
      // if any children, then same object will be repeat if, else blank array
    ]
}
 */
export const drawerMenuConfig = [
  {
    id: -1,
    label: "MainScreen",
    screen: {
      component: "MainScreen",
      header: "MainScreen",
    },
    children: [
      {
        id: 0,
        label: "Home",
        screen: {
          component: "MainScreen",
          header: "Home",
        },
        icon: {
          library: "Feather",
          name: "home",
          size: 27,
          color: "#02CFFC",
        },
        children: [],
      },
      {
        id: 1,
        label: "Dashboard",
        order: 1,
        screen: {
          component: "DashboardScreen",
          header: "Dashboard",
        },
        icon: {
          library: "Entypo",
          name: "chat",
          size: 22,
          color: "#02CFFC",
        },
        children: [
          {
            id: 2,
            label: "About Us",
            order: 1,
            screen: {
              component: "AboutUsScreen",
              header: "About Us",
            },
            icon: {
              library: "FontAwesome6",
              name: "users-rectangle",
              size: 20,
              color: "#3FFC02",
            },
            children: [
              {
                id: 3,
                label: "Settings",
                order: 1,
                screen: {
                  component: "SettingsScreen",
                  header: "Settings",
                },
                icon: {
                  library: "AntDesign",
                  name: "setting",
                  size: 30,
                  color: "#C550F9",
                },
                children: [],
              },
              {
                id: 4,
                label: "Profile",
                order: 1,
                screen: {
                  component: "ProfileScreen",
                  header: "Profile",
                },
                icon: {
                  library: "EvilIcons",
                  name: "user",
                  size: 30,
                  color: "#C550F9",
                },
                children: [
                  {
                    id: 10,
                    label: "Screen1",
                    order: 1,
                    screen: {
                      component: "Screen1",
                      header: "Screen1",
                    },
                    icon: {
                      library: "Entypo",
                      name: "chat",
                      size: 22,
                      color: "#EAF950",
                    },
                    children: [],
                  },
                  {
                    id: 11,
                    label: "Screen2",
                    order: 2,
                    screen: {
                      component: "Screen2",
                      header: "Screen1",
                    },
                    icon: {
                      library: "Entypo",
                      name: "chat",
                      size: 22,
                      color: "#EAF950",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: 7,
            label: "Contact Us",
            order: 1,
            screen: {
              component: "ContactUsScreen",
              header: "Contact Us",
            },
            icon: {
              library: "Entypo",
              name: "chat",
              size: 22,
              color: "#3FFC02",
            },
            children: [],
          },
        ],
      },
    ],
  },
];

/* Bottom Menu object template will be as followed
  {
    key: "",                  // unique Key to identify
    label: "",                // name you wish to display on menu inside bottom menu
    screen: {
      component: "",          // component name you wish to load on screen
      header: "",             // screen header you wish to display
    },
    icon: {
      library: "",            // library name you wish to use for icon ("https://oblador.github.io/react-native-vector-icons/")
      name: "",               // icon name you wish to show
      size: 0,                // icon size
      color: "",              // icon color
    },
  },
 */
export const bottomMenuConfig = [
  {
    key: "Home",
    label: "Home",
    screen: {
      component: "HomeScreen",
      header: "Home Screen",
    },
    icon: {
      library: "Feather",
      name: "home",
      size: 27,
      color: "#f20202",
    },
  },
  {
    key: "AboutUs",
    label: "AboutUs",
    screen: {
      component: "AboutUsScreen",
      header: "About us Screen",
    },
    icon: {
      library: "FontAwesome6",
      name: "users-rectangle",
      size: 20,
    },
  },
  {
    key: "ContactUs",
    label: "ContactUs",
    screen: {
      component: "ContactUsScreen",
      header: "Contact us Screen",
    },
    icon: {
      library: "Entypo",
      name: "chat",
      size: 22,
    },
  },
  {
    key: "Profile",
    label: "Profile",
    screen: {
      component: "ProfileScreen",
      header: "Profile Screen",
    },
    icon: {
      library: "EvilIcons",
      name: "user",
      size: 30,
    },
  },
];
