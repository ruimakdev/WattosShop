interface ErrorProps {
  error: string;
}

export const Error= ({ error } : ErrorProps) => <div>{error}</div>;
