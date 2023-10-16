import './menu.scss'

const Logout = () => {

    async function handleLogout(){
        try {
            await fetch(`http://localhost:8080/logout`, {
              method: "POST",
              credentials: 'include',
            });

            window.location.reload();
      
          } catch (err) {
            console.log("Failed to logout: " + err);
          }
    }

    return (
        <button className='menu-item header-20 btn-3' onClick={()=> handleLogout()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8 18.9282C9.21615 19.6303 10.5957 20 12 20C13.4043 20 14.7838 19.6303 16 18.9282C17.2162 18.2261 18.2261 17.2162 18.9282 16C19.6303 14.7838 20 13.4043 20 12C20 10.5957 19.6303 9.21615 18.9282 8C18.2261 6.78385 17.2162 5.77394 16 5.0718C14.7838 4.36965 13.4043 4 12 4C10.5957 4 9.21615 4.36965 8 5.0718" stroke="#222222" />
                 <path d="M2 12L1.60957 11.6877L1.35969 12L1.60957 12.3123L2 12ZM11 12.5C11.2761 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.2761 11.5 11 11.5V12.5ZM5.60957 6.68765L1.60957 11.6877L2.39043 12.3123L6.39043 7.31235L5.60957 6.68765ZM1.60957 12.3123L5.60957 17.3123L6.39043 16.6877L2.39043 11.6877L1.60957 12.3123ZM2 12.5H11V11.5H2V12.5Z" fill="#222222" />
            </svg>
            <span>Log out</span>
        </button>
    )
}

export default Logout