

import { Card, CardContent, Typography, styled } from "@mui/material";

const Component = styled(Card)({
  maxWidth: 900,                     // prevents very long boxes
  margin: "20px auto",
  boxShadow: "0 2px 8px rgb(0 0 0 / 15%)",
  borderRadius: 6
});

const Container = styled(CardContent)({
  display: "flex",
  gap: 20,
  padding: 16,
  alignItems: "flex-start",

  "@media (max-width:600px)": {
    flexDirection: "column"
  }
});

const Image = styled("img")({
  width: 240,
  height: 268,
  borderRadius: 6,
  objectFit: "cover",
  flexShrink: 0
});

const Right = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left"
});

const Title = styled(Typography)({
  fontWeight: 300,
  color: "#44444d",
  fontSize: 22,
  lineHeight: "27px"
});

const Author = styled(Typography)({
  color: "#808290",
  fontSize: 12,
  lineHeight: "22px",
  marginTop: 4
});

const Description = styled(Typography)({
  lineHeight: "22px",
  color: "#44444d",
  fontSize: 14,
  marginTop: 12           // extra gap after "short by"
});

const Publisher = styled(Typography)({
  fontSize: 12,
  marginTop: 12,
  "& a": {
    textDecoration: "none",
    color: "#000",
    fontWeight: 900
  }
});

const Short = styled("span")({
  fontWeight: 700
});

const Article = ({ article }) => {
  if (!article) return null;

  return (
    <Component>
      <Container>
        <Image src={article.url} alt="news" />

        <Right>
          <Title>{article.title}</Title>

          <Author>
            <Short>short</Short> by {article.author || "Unknown"} /{" "}
            {new Date(article.timestamp).toDateString()}
          </Author>

          <Description>{article.description}</Description>

          <Publisher>
            read more at{" "}
            <a href={article.link} target="_blank" rel="noreferrer">
              {article.publisher}
            </a>
          </Publisher>
        </Right>
      </Container>
    </Component>
  );
};

export default Article;
