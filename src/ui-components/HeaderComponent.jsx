/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function HeaderComponent(props) {
  const { label, overrides, ...rest } = props;
  return (
    <View
      width="658px"
      height="134px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "HeaderComponent")}
    >
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="90px"
        left="68px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="comment"
        {...getOverrideProps(overrides, "comment")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="575px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29px"
        left="43px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sample application"
        {...getOverrideProps(overrides, "title")}
      ></Text>
    </View>
  );
}
