import {
  AppBar,
  Button,
  Container,
  Spacer,
  Hr,
  SvgIcon,
  Card,
  Row,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
} from "@yakad/ui";
import LogoIcon from "@/app/logoicon";
import Symbol from "@yakad/symbols";

export default function Page() {
  return (
    <Container maxWidth="md">
      <h1>AppBar</h1>
      <Hr />
      <p>Discription</p>
      <Card style={{ maxWidth: "50rem" }}>
        <Row>
          <p>For import</p>
          <code>import AppBar from "@yakad/ui"</code>
          <Spacer />
          <Button icon="content_copy"></Button>
        </Row>
        <Row>
          <p>For use</p>
          <code>{"<AppBar>AppBar</AppBar>"}</code>
        </Row>
      </Card>

      <h2>Properties</h2>
      <p>Properties that are accepted as attributes:</p>
      <Table>
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>positionSticky</Td>
            <Td>True | False</Td>
          </Tr>
        </Tbody>
      </Table>

      <h3>PositionSticky</h3>
      <p>
        This feature makes positionSticky stick to the ceiling of your screen
        when it is true and stay there no matter how low you go. But if it is
        false, it will stay in its original place and will not accompany you
        when you go down.PositionSticky is in the appbar below True. Try the
        example below.
      </p>
      <h3>Example:</h3>
      <AppBar positionSticky>
        <h1>AppBar</h1>
        <Spacer />
        positionSticky is True
      </AppBar>

      <h2>Examples</h2>
      <h3>Examples 1</h3>
      <AppBar>
        <h3>Appbar</h3>
      </AppBar>

      <h3>Examples 2</h3>
      <AppBar>
        <Button icon="menu" />
        <h3>AppBar</h3>
      </AppBar>

      <h3>Examples 3</h3>
      <AppBar>
        <SvgIcon size={4}>
          <LogoIcon />
        </SvgIcon>
        <h3>AppBar</h3>
        <Button>Github</Button>
        <Button>About</Button>
        <Spacer />
        <Button variant="outlined" icon="login">
          Login
        </Button>
      </AppBar>

      <h1 style={{ marginTop: "3rem" }}>
        As you can see, you can add buttons, menus, texts and other things on
        the Appbar.In addition, with Appbar, you can make attractive headers
        that are not only beautiful and simple, but also one of the best choices
        for your header.
      </h1>
    </Container>
  );
}
