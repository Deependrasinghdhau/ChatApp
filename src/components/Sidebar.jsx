import React from 'react'

function Sidebar(props) {
    return (
        <div
            className="sideBar"
            style={{
                backdropFilter: props.sideBar ? "brightness(0.5)" : "brightness(1)",
                pointerEvents: props.sideBar ? "auto" : "none",
            }}
        >
            <div
                className="subContainer"
                id="leftSubContainer"
                style={{
                    transform: props.sideBar ? "translateX(0%)" : "translateX(100%)",
                }}
            >
                <div
                    class="menuBtnCover"
                    onClick={() =>
                        props.sideBar ? props.setSideBar(0) : props.setSideBar(1)
                    }
                >
                    <div class="menuBtn"></div>
                </div>
                <h3 className="subContainerItem">ALL YOUR CHATS</h3>
                <button
                    className="chatImagesBtn subContainerItem"
                    onClick={() => props.handleChatImages()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="21"
                        viewBox="0 0 26 25"
                        fill="none"
                    >
                        <path
                            d="M8.48381 0.050705C6.90679 0.250885 5.154 1.01743 3.89433 2.04762C3.53303 2.34544 2.82996 3.04851 2.52237 3.41469C1.90719 4.15682 1.27247 5.32372 0.94535 6.32462C0.632875 7.28157 0.540109 7.83817 0.515697 8.95624C0.48152 10.3819 0.618228 11.2119 1.11135 12.5741C1.50195 13.658 1.62889 14.3074 1.62889 15.3034C1.62889 16.3629 1.46289 17.2466 1.08694 18.145L0.896526 18.599L1.09182 18.6478C2.2099 18.9506 3.5965 18.6723 4.48022 17.9643C5.21258 17.3784 5.31512 17.3638 6.10607 17.7007C7.23391 18.184 8.39592 18.4135 9.70441 18.4135C10.9445 18.4135 11.9699 18.2377 13.0391 17.8374C17.2819 16.2506 19.6938 11.7978 18.7613 7.28157C18.4928 5.99749 17.8043 4.53277 16.9695 3.48793C15.5096 1.65214 13.3272 0.397358 11.0422 0.0702362C10.4856 -0.00788307 9.05017 -0.0176487 8.48381 0.050705ZM5.31023 8.04811C5.81312 8.27758 6.08654 8.69747 6.09142 9.24918C6.09142 9.53725 6.06701 9.63001 5.94495 9.8546C5.71059 10.2843 5.2907 10.5333 4.79758 10.5381C4.29957 10.543 3.73321 10.1476 3.57209 9.68372C3.34262 9.00995 3.69903 8.26782 4.37281 8.01882C4.61693 7.93093 5.08564 7.94558 5.31023 8.04811ZM10.2854 8.0774C10.7248 8.28735 11.0178 8.75118 11.0178 9.22477C11.0178 9.59095 10.925 9.83508 10.6858 10.0938C10.0608 10.7774 9.02087 10.6553 8.58146 9.8546C8.45939 9.6349 8.43498 9.53725 8.43498 9.24918C8.43498 8.70235 8.7084 8.28247 9.21129 8.04323C9.47006 7.92605 10.0071 7.9407 10.2854 8.0774ZM15.1727 8.07252C15.4657 8.20923 15.7928 8.55588 15.8709 8.82441C16.1199 9.64466 15.5877 10.4551 14.7577 10.5284C13.5469 10.6407 12.8682 9.14665 13.7422 8.31176C14.1181 7.95046 14.704 7.85281 15.1727 8.07252Z"
                            fill="#050505"
                        />
                        <path
                            d="M20.4203 7.18881C20.4203 7.19857 20.4544 7.41828 20.4935 7.67705C20.8206 9.88879 20.4007 12.3105 19.3364 14.3025C17.4322 17.8618 13.7216 20.0784 9.68381 20.0589C9.34693 20.0589 8.89286 20.0393 8.67803 20.0149C8.46321 19.9954 8.27768 19.9856 8.26791 19.9954C8.23862 20.0247 8.70733 20.7473 9.01004 21.133C10.3966 22.8809 12.3203 24.0527 14.5614 24.5116C15.0594 24.6142 15.2547 24.6288 16.2946 24.6288C17.232 24.6288 17.564 24.6093 17.9546 24.536C18.5747 24.4238 19.3998 24.1747 19.932 23.9453C20.5081 23.6914 20.6058 23.6719 20.8157 23.7256C20.9183 23.7549 21.1819 23.9209 21.4065 24.1015C22.1828 24.7167 22.964 24.995 23.9307 24.995C24.4336 24.995 25.0097 24.912 25.0927 24.8339C25.1074 24.8143 25.0683 24.6874 25.0097 24.5458C24.5801 23.5547 24.4043 22.6758 24.4043 21.5773C24.4043 20.6057 24.4727 20.22 24.8388 19.0384C25.3906 17.2612 25.5175 16.4508 25.4833 14.986C25.454 13.8728 25.3808 13.4285 25.0732 12.4716C24.4483 10.5284 23.1349 8.82442 21.3919 7.69658C20.889 7.36946 20.4203 7.12534 20.4203 7.18881Z"
                            fill="#050505"
                        />
                    </svg>
                    <p>Chat Images: {props.chatImages ? "ON" : "OFF"}</p>
                </button>
                <p className="subContainerItem h-tertiary">
                    When a bot sends you images, you will be charged secondary image
                </p>
                <div className="bots subContainerItem">
                    {props.bots.map((bot,index) => {
                        return (
                            <div key={index}
                                className={bot.id === props.currBot ? "bot botActive" : "bot"}
                                onClick={() => props.handleBot(bot.id)}
                            >
                                <img className="botIcon" src="/Images/user1.svg" alt="" />
                                <div className="botInfo">
                                    <p className="botName">{bot.botName}</p>
                                    <p className="botDescription">{bot.botDescription}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button className="createBotBtn h-tertiary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                    >
                        <path
                            d="M13.2664 0.0572796C10.4119 0.408964 7.89147 1.45816 5.58793 3.26348C4.97249 3.74412 3.53644 5.22119 3.04994 5.86595C1.50838 7.92331 0.529526 10.2151 0.130949 12.6828C-0.0155861 13.5913 -0.0448933 15.8304 0.0723352 16.8151C0.465051 20.0271 1.87179 23.0048 4.10499 25.3435C6.42026 27.7642 9.22788 29.2589 12.5572 29.8392C13.5771 30.015 15.7399 30.056 16.8184 29.9154C23.2777 29.1065 28.4475 24.3177 29.737 17.9581C30.0125 16.6099 30.0828 14.535 29.9128 13.1224C29.0688 6.34072 23.6528 0.92477 16.8712 0.0807247C16.0799 -0.0130577 13.9815 -0.0306416 13.2664 0.0572796ZM15.6168 7.4075C15.7751 7.50129 15.9333 7.66541 16.033 7.83539L16.1971 8.11087L16.2147 10.9361L16.2323 13.7613L19.0575 13.7789L21.8827 13.7965L22.1582 13.9606C22.9612 14.4295 22.9612 15.5666 22.1582 16.0355L21.8827 16.1996L19.0575 16.2172L16.2323 16.2348L16.2147 19.06L16.1971 21.8852L16.033 22.1607C15.5641 22.9637 14.427 22.9637 13.958 22.1607L13.7939 21.8852L13.7763 19.06L13.7588 16.2348L10.9336 16.2172L8.10835 16.1996L7.83286 16.0355C7.02985 15.5666 7.02985 14.4295 7.83286 13.9606L8.10835 13.7965L10.9336 13.7789L13.7588 13.7613L13.7763 10.9361L13.7939 8.11087L13.9522 7.83539C14.3097 7.23752 15.0131 7.05582 15.6168 7.4075Z"
                            fill="#F3AE9F"
                        />
                    </svg>
                    <p>Create new bot</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar