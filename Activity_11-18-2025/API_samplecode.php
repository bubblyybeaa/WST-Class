<?php
header("Content-Type: application/json");

$action = $_GET['action'] ?? '';

if ($action === "getUser") {
    echo json_encode(["message" => "User data returned"]);
}

elseif ($action === "addUser") {
    echo json_encode(["message" => "User added"]);
}

elseif ($action === "deleteUser") {
    echo json_encode(["message" => "User deleted"]);
}

elseif ($action === "listUsers") {
    echo json_encode([
        "users" => ["Alice", "Bob", "Charlie"]
    ]);
}

else {
    echo json_encode(["error" => "Unknown action"]);
}
?>
