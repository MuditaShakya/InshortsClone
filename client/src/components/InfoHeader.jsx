

import { Box, styled, Typography } from "@mui/material";

const Outer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: 30
});

const Container = styled(Box)(({ theme }) => ({
  background: "#f44336",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  height: 60,                 // slightly taller
  width: "100%",
  maxWidth: 900,              // same width as article cards
  padding: "0 24px",
  borderRadius: 6,
  boxShadow: "0 2px 8px rgb(0 0 0 / 15%)",

  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

const Text = styled(Typography)({
  fontSize: 14,
  fontWeight: 300,
  fontFamily: "Roboto, sans-serif"
});

const Image = styled("img")({
  height: 32,
  marginLeft: 16
});

const InfoHeader = () => {
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Outer>
      <Container>
        <Text>
          For the best experience use <b>inshorts</b> app on your smartphone
        </Text>

        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <Image src={appleStore} alt="apple store" />
          <Image src={googleStore} alt="google store" />
        </Box>
      </Container>
    </Outer>
  );
};

export default InfoHeader;
