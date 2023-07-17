<h2><a href="https://leetcode.com/problems/return-length-of-arguments-passed/">2703. Return Length of Arguments Passed</a></h2><h3>Easy</h3><hr><div style="null;/*startDM*/undefined/*endDM*/">Write a function&nbsp;<code style="null;/*startDM*/undefined/*endDM*/">argumentsLength</code> that returns the count of arguments passed to it.
<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong class="example" style="null;/*startDM*/undefined/*endDM*/">Example 1:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> argsArr = [5]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 1
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong>
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/"><strong class="example" style="null;/*startDM*/undefined/*endDM*/">Example 2:</strong></p>

<pre style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Input:</strong> argsArr = [{}, null, "3"]
<strong style="null;/*startDM*/undefined/*endDM*/">Output:</strong> 3
<strong style="null;/*startDM*/undefined/*endDM*/">Explanation:</strong> 
argumentsLength({}, null, "3"); // 3

Three values were passed to the function so it should return 3.
</pre>

<p style="null;/*startDM*/undefined/*endDM*/">&nbsp;</p>
<p style="null;/*startDM*/undefined/*endDM*/"><strong style="null;/*startDM*/undefined/*endDM*/">Constraints:</strong></p>

<ul style="null;/*startDM*/undefined/*endDM*/">
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">argsArr is a valid JSON array</code></li>
	<li style="null;/*startDM*/undefined/*endDM*/"><code style="null;/*startDM*/undefined/*endDM*/">0 &lt;= argsArr.length &lt;= 100</code></li>
</ul>
</div>