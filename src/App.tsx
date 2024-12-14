import Header from "./layouts/partials/header";

function App() {
  return (
    <div className="board">
      <Header />
      <aside className="board__sidebar">
        <div className="board__workspace">
          <div className="board__workspace-main">
            <img
              className="board__workspace-logo-image"
              src="assets/icons/User profile.svg"
              alt="Workspace logo"
            />
            <div className="board__workspace-details">
              <h3 className="board__workspace-title">workspace</h3>
              <h2 className="board__workspace-folder">Root folder</h2>
            </div>
          </div>
          <img
            className="board__workspace-dropdown-icon"
            src="assets/icons/Arrow Down.svg"
            alt="Dropdown icon"
          />
        </div>

        <nav className="board__menu">
          <ul className="board__menu-list">
            <li className="board__menu-item">
              <svg
                className="board__menu-item-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 15.73C17.0478 15.73 16.4089 15.7925 15.7438 15.8836C15.4331 15.9262 15.1962 16.1631 15.1536 16.4738C15.0625 17.1389 15 17.7778 15 18.23C15 18.6822 15.0625 19.3211 15.1536 19.9862C15.1962 20.2969 15.4331 20.5339 15.7438 20.5764C16.4089 20.6675 17.0478 20.73 17.5 20.73C17.9522 20.73 18.5911 20.6675 19.2562 20.5764C19.5669 20.5339 19.8038 20.2969 19.8464 19.9862C19.9375 19.3211 20 18.6822 20 18.23C20 17.7778 19.9375 17.1389 19.8464 16.4738C19.8038 16.1631 19.5669 15.9262 19.2562 15.8836C18.5911 15.7925 17.9522 15.73 17.5 15.73ZM15.4724 13.9021C14.2725 14.0664 13.3364 15.0025 13.1721 16.2024C13.0778 16.8907 13 17.6382 13 18.23C13 18.8218 13.0778 19.5694 13.1721 20.2576C13.3364 21.4575 14.2725 22.3936 15.4724 22.5579C16.1606 22.6522 16.9082 22.73 17.5 22.73C18.0918 22.73 18.8394 22.6522 19.5276 22.5579C20.7275 22.3936 21.6636 21.4575 21.8279 20.2576C21.9222 19.5694 22 18.8218 22 18.23C22 17.6382 21.9222 16.8907 21.8279 16.2024C21.6636 15.0025 20.7275 14.0664 19.5276 13.9021C18.8394 13.8078 18.0918 13.73 17.5 13.73C16.9082 13.73 16.1606 13.8078 15.4724 13.9021Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 15.73C6.04782 15.73 5.40893 15.7925 4.74381 15.8836C4.43308 15.9262 4.19615 16.1631 4.15359 16.4738C4.0625 17.1389 4 17.7778 4 18.23C4 18.6822 4.0625 19.3211 4.15359 19.9862C4.19615 20.2969 4.43308 20.5339 4.74381 20.5764C5.40893 20.6675 6.04782 20.73 6.5 20.73C6.95218 20.73 7.59107 20.6675 8.25619 20.5764C8.56692 20.5339 8.80385 20.2969 8.84641 19.9862C8.9375 19.3211 9 18.6822 9 18.23C9 17.7778 8.9375 17.1389 8.84641 16.4738C8.80385 16.1631 8.56692 15.9262 8.25619 15.8836C7.59107 15.7925 6.95218 15.73 6.5 15.73ZM4.47244 13.9021C3.27253 14.0664 2.33642 15.0025 2.17209 16.2024C2.07784 16.8907 2 17.6382 2 18.23C2 18.8218 2.07784 19.5694 2.17209 20.2576C2.33642 21.4575 3.27253 22.3936 4.47244 22.5579C5.16065 22.6522 5.90816 22.73 6.5 22.73C7.09184 22.73 7.83935 22.6522 8.52756 22.5579C9.72747 22.3936 10.6636 21.4575 10.8279 20.2576C10.9222 19.5694 11 18.8218 11 18.23C11 17.6382 10.9222 16.8907 10.8279 16.2024C10.6636 15.0025 9.72747 14.0664 8.52756 13.9021C7.83935 13.8078 7.09184 13.73 6.5 13.73C5.90816 13.73 5.16065 13.8078 4.47244 13.9021Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 4.73001C17.0478 4.73001 16.4089 4.79252 15.7438 4.88361C15.4331 4.92616 15.1962 5.16309 15.1536 5.47382C15.0625 6.13894 15 6.77783 15 7.23001C15 7.68219 15.0625 8.32109 15.1536 8.9862C15.1962 9.29693 15.4331 9.53386 15.7438 9.57642C16.4089 9.66751 17.0478 9.73001 17.5 9.73001C17.9522 9.73001 18.5911 9.66751 19.2562 9.57642C19.5669 9.53386 19.8038 9.29693 19.8464 8.9862C19.9375 8.32109 20 7.68219 20 7.23001C20 6.77783 19.9375 6.13894 19.8464 5.47382C19.8038 5.16309 19.5669 4.92616 19.2562 4.88361C18.5911 4.79252 17.9522 4.73001 17.5 4.73001ZM15.4724 2.9021C14.2725 3.06643 13.3364 4.00255 13.1721 5.20245C13.0778 5.89066 13 6.63817 13 7.23001C13 7.82185 13.0778 8.56937 13.1721 9.25758C13.3364 10.4575 14.2725 11.3936 15.4724 11.5579C16.1606 11.6522 16.9082 11.73 17.5 11.73C18.0918 11.73 18.8394 11.6522 19.5276 11.5579C20.7275 11.3936 21.6636 10.4575 21.8279 9.25758C21.9222 8.56937 22 7.82185 22 7.23001C22 6.63817 21.9222 5.89066 21.8279 5.20245C21.6636 4.00255 20.7275 3.06643 19.5276 2.9021C18.8394 2.80785 18.0918 2.73001 17.5 2.73001C16.9082 2.73001 16.1606 2.80785 15.4724 2.9021Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 4.73001C6.04782 4.73001 5.40893 4.79252 4.74381 4.88361C4.43308 4.92616 4.19615 5.16309 4.15359 5.47382C4.0625 6.13894 4 6.77783 4 7.23001C4 7.68219 4.0625 8.32109 4.15359 8.9862C4.19615 9.29693 4.43308 9.53386 4.74381 9.57642C5.40893 9.66751 6.04782 9.73001 6.5 9.73001C6.95218 9.73001 7.59107 9.66751 8.25619 9.57642C8.56692 9.53386 8.80385 9.29693 8.84641 8.9862C8.9375 8.32109 9 7.68219 9 7.23001C9 6.77783 8.9375 6.13894 8.84641 5.47382C8.80385 5.16309 8.56692 4.92616 8.25619 4.88361C7.59107 4.79252 6.95218 4.73001 6.5 4.73001ZM4.47244 2.9021C3.27253 3.06643 2.33642 4.00255 2.17209 5.20245C2.07784 5.89066 2 6.63817 2 7.23001C2 7.82185 2.07784 8.56937 2.17209 9.25758C2.33642 10.4575 3.27253 11.3936 4.47244 11.5579C5.16065 11.6522 5.90816 11.73 6.5 11.73C7.09184 11.73 7.83935 11.6522 8.52756 11.5579C9.72747 11.3936 10.6636 10.4575 10.8279 9.25758C10.9222 8.56937 11 7.82185 11 7.23001C11 6.63817 10.9222 5.89066 10.8279 5.20245C10.6636 4.00255 9.72747 3.06643 8.52756 2.9021C7.83935 2.80785 7.09184 2.73001 6.5 2.73001C5.90816 2.73001 5.16065 2.80785 4.47244 2.9021Z"
                  fill="#353945"
                />
              </svg>
              Dashboard
            </li>
            <li className="board__menu-item">
              <svg
                className="board__menu-item-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8676 8.73001L10.6954 6.77632C10.398 6.28056 9.94858 5.99706 9.49937 5.9398C8.63403 5.82949 7.55518 5.73001 6.5 5.73001C5.76672 5.73001 5.0186 5.77812 4.33466 5.84544C3.70504 5.90742 3.24029 6.37513 3.19011 7.02925C3.08968 8.33862 3 10.2127 3 12.73C3 14.5026 3.06456 16.0816 3.14656 17.3716C3.22311 18.5758 4.13628 19.4848 5.34979 19.5547C6.99648 19.6497 9.2132 19.73 12 19.73C14.7868 19.73 17.0035 19.6497 18.6502 19.5547C19.8637 19.4848 20.7769 18.5758 20.8534 17.3716C20.9354 16.0816 21 14.5026 21 12.73C21 11.7639 20.944 10.8467 20.8699 10.0579C20.8087 9.40692 20.3231 8.92127 19.6721 8.86011C18.8833 8.786 17.9661 8.73001 17 8.73001H11.8676ZM13 6.73001L12.4104 5.74733C11.8306 4.78095 10.8702 4.09836 9.75227 3.95586C8.83875 3.83941 7.66937 3.73001 6.5 3.73001C5.68392 3.73001 4.86784 3.78329 4.13873 3.85506C2.53169 4.01326 1.31947 5.26622 1.19597 6.87629C1.09136 8.2401 1 10.1653 1 12.73C1 14.5506 1.06629 16.1722 1.15059 17.4985C1.29156 19.7163 3.01613 21.4235 5.23467 21.5514C6.91963 21.6486 9.17474 21.73 12 21.73C14.8253 21.73 17.0804 21.6486 18.7653 21.5514C20.9839 21.4235 22.7084 19.7163 22.8494 17.4985C22.9337 16.1722 23 14.5506 23 12.73C23 11.6889 22.9398 10.708 22.8611 9.87086C22.7101 8.26314 21.4669 7.01991 19.8591 6.86887C19.0221 6.79023 18.0411 6.73001 17 6.73001H13Z"
                  fill="#353945"
                />
              </svg>
              Boards
            </li>
            <li className="board__menu-item">
              <svg
                className="board__menu-item-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4_116)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.042 0.842582C18.2107 -0.464422 25.204 6.51602 23.7853 14.7008L23.7852 14.7014C22.9137 19.7126 18.8886 23.7499 13.8549 24.518C10.6944 25.0265 7.73149 24.2033 5.40893 22.682L3.638 23.529C2.08396 24.2964 0.225398 22.7864 0.862802 21.0811C0.863078 21.0804 0.863354 21.0796 0.863631 21.0789L1.69672 18.8295C0.45234 16.6343 -0.200566 13.9794 0.106076 11.2196L0.107589 11.206L0.107682 11.206C0.763028 5.96322 4.90246 1.71734 10.0322 0.844202L10.042 0.842533L10.042 0.842582ZM10.3629 2.81668C17.1918 1.72729 22.9954 7.54534 21.8147 14.3587C21.0865 18.546 17.7137 21.9077 13.5495 22.5414L13.5495 22.5414L13.5407 22.5428C10.733 22.9956 8.09799 22.183 6.08813 20.7213C5.79118 20.5053 5.39975 20.4695 5.0685 20.6279L2.7685 21.7279L2.75599 21.734C2.75539 21.7337 2.75477 21.7333 2.75414 21.733L3.73771 19.0773C3.8448 18.7882 3.81252 18.4658 3.65022 18.2037C2.45869 16.2789 1.82182 13.9036 2.09309 11.4473C2.64028 7.0948 6.09703 3.54504 10.3629 2.81668Z"
                    fill="#353945"
                  />
                  <path
                    d="M8 13.73C8.55228 13.73 9 13.2823 9 12.73C9 12.1777 8.55228 11.73 8 11.73C7.44772 11.73 7 12.1777 7 12.73C7 13.2823 7.44772 13.73 8 13.73Z"
                    fill="#353945"
                  />
                  <path
                    d="M12 13.73C12.5523 13.73 13 13.2823 13 12.73C13 12.1777 12.5523 11.73 12 11.73C11.4477 11.73 11 12.1777 11 12.73C11 13.2823 11.4477 13.73 12 13.73Z"
                    fill="#353945"
                  />
                  <path
                    d="M16 13.73C16.5523 13.73 17 13.2823 17 12.73C17 12.1777 16.5523 11.73 16 11.73C15.4477 11.73 15 12.1777 15 12.73C15 13.2823 15.4477 13.73 16 13.73Z"
                    fill="#353945"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_116">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.730011)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Messages
            </li>
            <li className="board__menu-item">
              <svg
                className="board__menu-item-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 6.73001H5C4.44772 6.73001 4 7.17773 4 7.73001V19.73C4 20.2823 4.44772 20.73 5 20.73H19C19.5523 20.73 20 20.2823 20 19.73V7.73001C20 7.17773 19.5523 6.73001 19 6.73001ZM5 4.73001C3.34315 4.73001 2 6.07316 2 7.73001V19.73C2 21.3869 3.34315 22.73 5 22.73H19C20.6569 22.73 22 21.3869 22 19.73V7.73001C22 6.07316 20.6569 4.73001 19 4.73001H5Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 12.73C9.44772 12.73 9 13.1777 9 13.73C9 14.2823 9.44772 14.73 10 14.73H17C17.5523 14.73 18 14.2823 18 13.73C18 13.1777 17.5523 12.73 17 12.73H10ZM7 16.73C6.44772 16.73 6 17.1777 6 17.73C6 18.2823 6.44772 18.73 7 18.73H13C13.5523 18.73 14 18.2823 14 17.73C14 17.1777 13.5523 16.73 13 16.73H7Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 2.73001C6.44772 2.73001 6 3.17773 6 3.73001V7.73001C6 8.2823 6.44772 8.73001 7 8.73001C7.55228 8.73001 8 8.2823 8 7.73001V3.73001C8 3.17773 7.55228 2.73001 7 2.73001ZM17 2.73001C16.4477 2.73001 16 3.17773 16 3.73001V7.73001C16 8.2823 16.4477 8.73001 17 8.73001C17.5523 8.73001 18 8.2823 18 7.73001V3.73001C18 3.17773 17.5523 2.73001 17 2.73001Z"
                  fill="#353945"
                />
              </svg>
              Calendar
            </li>
            <li className="board__menu-item">
              <svg
                className="board__menu-item-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13.73C8.13401 13.73 5 16.864 5 20.73V22.73C5 23.2823 4.55228 23.73 4 23.73C3.44772 23.73 3 23.2823 3 22.73V20.73C3 15.7594 7.02944 11.73 12 11.73C16.9706 11.73 21 15.7594 21 20.73V22.73C21 23.2823 20.5523 23.73 20 23.73C19.4477 23.73 19 23.2823 19 22.73V20.73C19 16.864 15.866 13.73 12 13.73Z"
                  fill="#353945"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 11.73C14.2091 11.73 16 9.93915 16 7.73001C16 5.52087 14.2091 3.73001 12 3.73001C9.79086 3.73001 8 5.52087 8 7.73001C8 9.93915 9.79086 11.73 12 11.73ZM12 13.73C15.3137 13.73 18 11.0437 18 7.73001C18 4.4163 15.3137 1.73001 12 1.73001C8.68629 1.73001 6 4.4163 6 7.73001C6 11.0437 8.68629 13.73 12 13.73Z"
                  fill="#353945"
                />
              </svg>
              Team Members
            </li>
          </ul>
        </nav>
        <div className="board__menu-global">
          <div className="board__menu-item">
            <svg
              className="board__menu-item-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 20.73C16.4183 20.73 20 17.1483 20 12.73C20 8.31173 16.4183 4.73001 12 4.73001C7.58172 4.73001 4 8.31173 4 12.73C4 17.1483 7.58172 20.73 12 20.73ZM12 22.73C17.5228 22.73 22 18.2529 22 12.73C22 7.20716 17.5228 2.73001 12 2.73001C6.47715 2.73001 2 7.20716 2 12.73C2 18.2529 6.47715 22.73 12 22.73Z"
                fill="#353945"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.73001C11.4477 7.73001 11 8.17773 11 8.73001C11 9.2823 11.4477 9.73001 12 9.73001C12.5523 9.73001 13 9.2823 13 8.73001C13 8.17773 12.5523 7.73001 12 7.73001ZM12 11.73C11.4477 11.73 11 12.1777 11 12.73V16.73C11 17.2823 11.4477 17.73 12 17.73C12.5523 17.73 13 17.2823 13 16.73V12.73C13 12.1777 12.5523 11.73 12 11.73Z"
                fill="#353945"
              />
            </svg>
            Support
          </div>
          <button className="board__menu-logout">
            <svg
              className="board__menu-logout-icon"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0292 15.7307C11.5811 15.7099 12.0454 16.1404 12.0662 16.6923C12.1132 17.9365 12.1791 18.8446 12.244 19.4956C12.3079 20.1368 12.695 20.5226 13.2345 20.5886C13.8708 20.6664 14.7683 20.73 16 20.73C17.2317 20.73 18.1292 20.6664 18.7655 20.5886C19.3048 20.5226 19.6921 20.1367 19.7559 19.4953C19.8763 18.2868 20 16.1988 20 12.73C20 9.26119 19.8763 7.17322 19.7559 5.96469C19.6921 5.32334 19.3048 4.93738 18.7655 4.87145C18.1292 4.79367 17.2317 4.73001 16 4.73001C14.7683 4.73001 13.8708 4.79366 13.2345 4.87144C12.695 4.9374 12.3079 5.32319 12.244 5.96438C12.1791 6.61546 12.1132 7.52355 12.0662 8.76773C12.0454 9.31963 11.5811 9.75013 11.0292 9.7293C10.4773 9.70846 10.0468 9.24418 10.0676 8.69229C10.1158 7.41525 10.1842 6.46544 10.2538 5.76612C10.4003 4.29596 11.4253 3.07771 12.9919 2.88622C13.7211 2.79708 14.7008 2.73001 16 2.73001C17.2992 2.73001 18.2789 2.79708 19.0082 2.88623C20.5748 3.07775 21.5997 4.29656 21.7461 5.76644C21.875 7.06069 22 9.21848 22 12.73C22 16.2415 21.875 18.3993 21.7461 19.6936C21.5997 21.1635 20.5748 22.3823 19.0082 22.5738C18.2789 22.6629 17.2992 22.73 16 22.73C14.7008 22.73 13.7211 22.6629 12.9919 22.5738C11.4253 22.3823 10.4003 21.1641 10.2538 19.6939C10.1842 18.9946 10.1158 18.0448 10.0676 16.7677C10.0468 16.2158 10.4773 15.7515 11.0292 15.7307Z"
                fill="#353945"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.20711 15.5229C7.59763 15.9134 7.59763 16.5466 7.20711 16.9371C6.81658 17.3276 6.18342 17.3276 5.79289 16.9371L2.29289 13.4371C1.90237 13.0466 1.90237 12.4134 2.29289 12.0229L5.79289 8.5229C6.18342 8.13238 6.81658 8.13238 7.20711 8.5229C7.59763 8.91343 7.59763 9.54659 7.20711 9.93712L5.41421 11.73H15C15.5523 11.73 16 12.1777 16 12.73C16 13.2823 15.5523 13.73 15 13.73L5.41421 13.73L7.20711 15.5229Z"
                fill="#353945"
              />
            </svg>
            Logout
          </button>
        </div>
      </aside>
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default App;
