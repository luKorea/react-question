import styled from 'styled-components'

const MainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  .layout {
    width: 100%;
  }
  .content-layout {
    min-height: calc(100vh - 65px - 65px) !important;
  }
  .header {
    display: flex;
    justify-content: space-between;
    color: #fff;
    .left-layout {
      color: #fff;
      cursor: pointer;
    }
    .login {
      cursor: pointer;
    }
  }
  .footer-layout {
    background-color: #fff;
    text-align: center;
  }
`

export default MainLayoutWrapper
