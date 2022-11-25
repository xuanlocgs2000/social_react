import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      {/* Modal content */}
      <from className="infoForm">
        <h3>Your infor</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        {/* <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div> */}
        <div>
          <input
            type="text"
            placeholder="Work at"
            className="infoInput"
            name="wordkAt"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Lives in"
            className="infoInput"
            name="livesIn"
          />
          <input
            type="text"
            placeholder="Country"
            className="infoInput"
            name="Country"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="RelationsShip Status"
            className="infoInput"
            name="RelationsShipStatus"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Background Image
          <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </from>
    </Modal>
  );
}
export default ProfileModal;
