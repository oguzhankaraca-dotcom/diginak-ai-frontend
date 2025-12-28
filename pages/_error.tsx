import React from "react";

type ErrorProps = {
  statusCode?: number;
};

export default function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ padding: 40 }}>
      <h1>Something went wrong</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred.`
          : "An unexpected error occurred."}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res
    ? res.statusCode
    : err
    ? err.statusCode
    : 404;
  return { statusCode };
};
