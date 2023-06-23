"use client";

import { PropsWithChildren } from "react";

import Header from "@/app/components/modules/Header";

import { ChildrenWrapper, Container } from "./styled";

type Props = {
  withHeader?: boolean;
};

function Page({ children }: PropsWithChildren<Props>) {
  return (
    <Container>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
}

export default Page;
