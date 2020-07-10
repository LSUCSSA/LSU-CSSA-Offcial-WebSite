import {Typography} from "antd"
import Viewer, {Worker, defaultLayout, SpecialZoomLevel} from '@phuocng/react-pdf-viewer';
import {useEffect, useState} from "react";

const {Title} = Typography;

const NewComer = ({url}) => {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        const mobile = window.matchMedia("(max-width: 600px)");
        const checkWidth = (media) => {
            if (media.matches) {
                setMatch(media.matches)
            } else {
                setMatch(false)
            }
        };
        checkWidth(mobile);
        mobile.addListener(checkWidth);
    });
    const renderToolbar = (toolbarSlot) => {
        return (
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    width: '100%',
                }}
            >
                <div style={{padding: '0 2px'}}>
                    {toolbarSlot.toggleSidebarButton}
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexGrow: 1,
                        flexShrink: 1,
                        justifyContent: 'center',
                    }}
                >
                    {
                        match ? (
                            <>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.previousPageButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.nextPageButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomOutButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomPopover}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomInButton}
                                </div>
                            </>
                        ) : (
                            <>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.previousPageButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.currentPage + 1} / {toolbarSlot.numPages}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.nextPageButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomOutButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomPopover}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.zoomInButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.printButton}
                                </div>
                                <div style={{padding: '0 2px'}}>
                                    {toolbarSlot.fullScreenButton}
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        );
    };
    const layout = (
        isSidebarOpened,
        container,
        main,
        toolbar,
        sidebar,
    ) => {
        return defaultLayout(
            isSidebarOpened,
            container,
            main,
            toolbar(renderToolbar),
            sidebar,
        );
    };
    return (
        <div style={{textAlign: 'center'}}>
            <Title level={2}>接机系统</Title>
            <a target="_blank" rel="noopener noreferrer"></a>
            <Title level={2}>新生手册</Title>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
                <div className="newcomer">
                    <Viewer fileUrl={`${process.env.NEXT_PUBLIC_API + url}`}     defaultScale={SpecialZoomLevel.PageFit}
                            layout={layout}/>
                </div>
            </Worker>
        </div>
    )
};
NewComer.getInitialProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/newcomer-guide`);
    const pdfLink = await res.json();
    return {url: pdfLink.guideFileUrl};
};
export default NewComer
