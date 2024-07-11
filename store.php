<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "book_db";

// Connect to the database
$conn = new mysqli($host, $user, $pass, $db);

// Checking connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully<br>";
}

// Retrieving data from user
if (isset($_POST['customer-name']) && isset($_POST['customer-address']) && isset($_POST['phone-number']) && isset($_POST['time-slot'])) {
    $name = $_POST['customer-name'];
    $address = $_POST['customer-address'];
    $phone = $_POST['phone-number'];
    $time = $_POST['time-slot'];

    
    $stmt = $conn->prepare("INSERT INTO table_reserve (`Customer Name`, `Customer Address`, `Phone Number`, `Time Slot`) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $address, $phone, $time);

    
    if ($stmt->execute()) {
        echo "Inserted successfully";
    } else {
        echo "An error occurred: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "All form fields are required.";
}

// Close the connection
$conn->close();
?>
