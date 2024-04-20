import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SnackOrBoozeApi from "./Api";
import { Alert, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle } from 'reactstrap';


function AddItemForm({ snacks, drinks }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("snacks");
  const [selectedItem, setSelectedItem] = useState("");
  const history = useHistory();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedItem(""); // Reset selected item when category changes
  };

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming `selectedItem` holds the ID of the selected item and you want to submit additional data,
    // you might need to find the item details first if not already done.
    const itemDetails = selectedCategory === "snacks"
      ? snacks.find(snack => snack.id === selectedItem)
      : drinks.find(drink => drink.id === selectedItem);

    if (!itemDetails) {
      console.error("Item details not found.");
      return;
    }

    try {
      await SnackOrBoozeApi.addItem(selectedCategory, itemDetails);
      console.log(`Successfully submitted ${selectedItem} from ${selectedCategory}`);
      setShowSuccessMessage(true);
      setSuccessMessage(`Successfully added the ${selectedCategory.slice(0, -1)}!`);
      setSelectedItem("");
      setSelectedCategory("snacks"); // Reset to default or as needed

    } catch (error) {
      console.error("Failed to submit item:", error);
    }
  };

  return (
    <section className="col-md-8 mx-auto">
      <Card>
        <CardBody className="text-center">
          <CardTitle tag="h5">Add a New Item</CardTitle>
          <Form onSubmit={handleSubmit} className="mt-4">
          {showSuccessMessage && <Alert color="success">{successMessage}</Alert>}
            <FormGroup>
              <Label for="categorySelect">Select Category:</Label>
              <Input type="select" id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="snacks">Snacks</option>
                <option value="drinks">Drinks</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="itemSelect">{selectedCategory === 'snacks' ? 'Select Snack:' : 'Select Drink:'}</Label>
              <Input type="select" id="itemSelect" value={selectedItem} onChange={handleItemChange}>
                <option value="">Select an item...</option>
                {(selectedCategory === 'snacks' ? snacks : drinks).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddItemForm;