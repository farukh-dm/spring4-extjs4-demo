<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
  pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Email Dashboard</title>

  <script type="text/javascript">
      var CONTEXT_PATH = '<%= request.getContextPath() %>';
  </script>
  
<!-- <link
	href="https://cdnjs.cloudflare.com/ajax/libs/extjs/4.2.1/resources/css/ext-all.css"
	rel="stylesheet" /> -->
  
  <!-- <link
  href="https://cdnjs.cloudflare.com/ajax/libs/extjs/4.2.1/resources/ext-theme-neptune/ext-theme-neptune-all.min.css"
  rel="stylesheet" /> -->
	
	<link
  href="https://cdnjs.cloudflare.com/ajax/libs/extjs/4.2.1/resources/ext-theme-gray/ext-theme-gray-all.css"
  rel="stylesheet" />
  
</head>
<body>
	
	<script type="text/javascript"
		src="https://cdnjs.cloudflare.com/ajax/libs/extjs/4.2.1/ext-all-debug.js"></script>
		
	<script type="text/javascript" src="<%= request.getContextPath() %>/resources/js/emailApp.js"></script>
</body>
</html>