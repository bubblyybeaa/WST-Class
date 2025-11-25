<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Complete</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 60px 50px;
            width: 100%;
            max-width: 500px;
            text-align: center;
            animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes bounce {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        .success-icon {
            font-size: 80px;
            margin-bottom: 20px;
            animation: bounce 1s ease-in-out;
        }

        h1 {
            color: #333;
            margin-bottom: 15px;
            font-size: 32px;
        }

        .message {
            color: #666;
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.6;
        }

        .details {
            background-color: #f5f5f5;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            text-align: left;
        }

        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e0e0e0;
        }

        .detail-row:last-child {
            border-bottom: none;
        }

        .detail-label {
            font-weight: 600;
            color: #555;
        }

        .detail-value {
            color: #999;
        }

        .button-group {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: inline-block;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background-color: #f0f0f0;
            color: #333;
            border: 2px solid #e0e0e0;
        }

        .btn-secondary:hover {
            background-color: #e8e8e8;
            border-color: #d0d0d0;
        }

        .error {
            background-color: #fee;
            color: #c33;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            border-left: 4px solid #c33;
        }

        .error-icon {
            font-size: 60px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php
        $conn = new mysqli("localhost", "root", "", "registration_db");

        if ($conn->connect_error) {
            ?>
            <div class="error-icon">❌</div>
            <h1>Oops!</h1>
            <div class="error">
                <strong>Connection failed:</strong> <?php echo $conn->connect_error; ?>
            </div>
            <div class="button-group">
                <a href="form.html" class="btn btn-primary">← Back to Form</a>
            </div>
            <?php
            die();
        }

        $first = $_POST['firstname'];
        $last = $_POST['lastname'];
        $email = $_POST['email'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];

        $sql = "INSERT INTO persons (first_name, last_name, email, age, gender)
        VALUES ('$first', '$last', '$email', '$age', '$gender')";

        if ($conn->query($sql) === TRUE) {
            ?>
            <div class="success-icon">✨</div>
            <h1>Welcome!</h1>
            <p class="message">Your registration has been completed successfully!</p>
            
            <div class="details">
                <div class="detail-row">
                    <span class="detail-label">First Name:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($first); ?></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Last Name:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($last); ?></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($email); ?></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Age:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($age); ?></span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Gender:</span>
                    <span class="detail-value"><?php echo htmlspecialchars($gender); ?></span>
                </div>
            </div>

            <div class="button-group">
                <a href="form.html" class="btn btn-primary">➕ Register Another</a>
                <button class="btn btn-secondary" onclick="window.print()">🖨️ Print</button>
            </div>
            <?php
        } else {
            ?>
            <div class="error-icon">❌</div>
            <h1>Error!</h1>
            <div class="error">
                <strong>Database Error:</strong> <?php echo $conn->error; ?>
            </div>
            <div class="button-group">
                <a href="form.html" class="btn btn-primary">← Back to Form</a>
            </div>
            <?php
        }

        $conn->close();
        ?>
    </div>
</body>
</html>
