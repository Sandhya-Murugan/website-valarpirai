import {items} from "../Assets/HeaderData";
import { MenuOutlined } from '@ant-design/icons';
import {Menu, Layout, Modal, Drawer} from "antd";
import {useState} from "react";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";


const {Header } = Layout;
const HeaderMenu = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <>
            {!isMobile ? (

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        className="header-menu"
                    >
                        {items.map((item) => (
                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                        ))}
                    </Menu>
            ) : (
                <MenuOutlined className="burger-menu" onClick={toggleModal} />
            )}

            <Drawer
                title="Menu"
                visible={modalVisible}
                onClose={toggleModal}
                placement = "right"
                footer={null}
            >
                <Menu
                    theme="dark"
                    mode="vertical"
                    className="header-menu"
                    onClick={toggleModal}
                >
                    {items.map((item) => (
                        <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                </Menu>
            </Drawer>
        </>
    )
}

export default HeaderMenu;