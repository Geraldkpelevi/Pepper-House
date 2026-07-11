import { useState } from "react";
import axios from "axios";

export function useAddProduct() {
  const [formData, setFormData] = useState({
    menuName: "",
    price: "",
    rating: "",
    description: "",
    category: "",
    menuImage: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, menuImage: file.name }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      menuName: formData.menuName,
      price: parseFloat(formData.price) || 0,
      rating: parseFloat(formData.rating) || 0,
      description: formData.description,
      menuImage: formData.menuImage,
      category: formData.category,
    };

    axios
      .post("http://localhost:3000/api/menusCategories/createMenusCategory", payload)
      .then((response) => {
        if (response.data.ok) {
          setStatus("Menu category created successfully.");
          setFormData({
            menuName: "",
            price: "",
            rating: "",
            description: "",
            menuImage: "",
            category: "",
          });
        } else {
          setStatus("Failed to create menu category.");
        }
      })
      .catch((error) => {
        console.error("Error creating menu category:", error);
        setStatus("Error creating menu category. Check the console for details.");
      });
  };

  return { formData, status, handleChange, handleFileChange, handleSubmit };
}
