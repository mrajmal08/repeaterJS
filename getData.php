<?php
var_dump($_POST); exit;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Repeater data</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
    <a type="button" class="float-right btn btn-warning" href="index.html">home</a>
    <h3>Repeate Data</h3>
    <table class="table table-striped table-responsive table-bordered">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <?php
           foreach ($data as $value){
        ?>
        <tr>
            <td><?= $value['name'] ?> </td>
            <td><?= $value['city'] ?> </td>
        </tr>
<?php } ?>
        </tbody>
    </table>
</div>

</body>
</html>
