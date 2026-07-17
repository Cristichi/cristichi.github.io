<?php
$pagesDir = './pages';
$pages = [];

if (is_dir($pagesDir)) {
    $folders = array_filter(scandir($pagesDir), function($item) use ($pagesDir) {
        return is_dir($pagesDir . '/' . $item) && $item !== '.' && $item !== '..';
    });

    foreach ($folders as $folder) {
        $yamlFile = $pagesDir . '/' . $folder . '/webpage.yaml';
        $pageName = $folder;

        if (file_exists($yamlFile)) {
            $yamlContent = file_get_contents($yamlFile);
            if (preg_match('/name:\s*["\']?([^"\'\n]+)["\']?/', $yamlContent, $matches)) {
                $pageName = trim($matches[1]);
            }
        }

        $pages[$folder] = $pageName;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Pages</title>
</head>
<body>
    <h1>Pages</h1>
    <ul>
        <?php foreach ($pages as $folder => $name): ?>
            <li><a href="./pages/<?php echo htmlspecialchars($folder); ?>"><?php echo htmlspecialchars($name); ?></a></li>
        <?php endforeach; ?>
    </ul>
</body>
</html>