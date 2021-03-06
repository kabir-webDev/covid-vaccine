import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import "./rp.css";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    textAlign: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const ReactPdf = () => (
  <div className="pdf__style">
    <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>User Data Table - 1</Text>
          </View>
          <View style={styles.section}>
            <Text>User Data Table - 2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  </div>
);
export default ReactPdf;
